import { Component, OnDestroy } from '@angular/core';
import { AudioRecorderService } from './services/audio-recorder.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isRecording = false;
  recordedTime;
  blobUrl;

  constructor(private audioRecorder: AudioRecorderService, private sanitizer: DomSanitizer) {

    this.audioRecorder.recordingFailed().subscribe(() => {
      this.isRecording = false;      
    });

    this.audioRecorder.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audioRecorder.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
    });
  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecorder.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecorder.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecorder.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }
}

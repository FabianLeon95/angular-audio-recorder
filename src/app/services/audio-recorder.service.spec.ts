import { TestBed } from '@angular/core/testing';

import { AudioRecorderService } from './audio-recorder.service';

describe('AudioRecorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioRecorderService = TestBed.get(AudioRecorderService);
    expect(service).toBeTruthy();
  });
});

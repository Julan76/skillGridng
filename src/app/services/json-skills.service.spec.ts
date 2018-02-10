import { TestBed, inject } from '@angular/core/testing';

import { JsonSkillsService } from './json-skills.service';

describe('JsonSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonSkillsService]
    });
  });

  it('should be created', inject([JsonSkillsService], (service: JsonSkillsService) => {
    expect(service).toBeTruthy();
  }));
});

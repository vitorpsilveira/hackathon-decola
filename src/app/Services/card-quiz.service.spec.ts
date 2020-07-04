import { TestBed } from '@angular/core/testing';

import { CardQuizService } from './card-quiz.service';

describe('CardQuizService', () => {
  let service: CardQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

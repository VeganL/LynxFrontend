import { TestBed } from '@angular/core/testing';

import { ProfileCardsService } from './profile-cards.service';

describe('ProfileCardsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ProfileCardsService = TestBed.get(ProfileCardsService);
        expect(service).toBeTruthy();
    });
});

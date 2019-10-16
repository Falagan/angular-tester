import { TestBed } from '@angular/core/testing';

import { WebsocketrxjsService } from './websocketrxjs.service';

describe('WebsocketrxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsocketrxjsService = TestBed.get(WebsocketrxjsService);
    expect(service).toBeTruthy();
  });
});

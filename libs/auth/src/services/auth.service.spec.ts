import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const mockResponse = {
  id: 1,
  email: 'owner@mail.com',
  first_name: 'Owner',
  last_name: 'Owner',
  position: ['default'],
  roles: ['owner'],
  rate: 0,
  locked: 0,
  created_at: '2017-10-08T16:15:48.000Z',
  updated_at: '2017-10-08T16:15:48.000Z',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
};

const mockRequest = { email: 'owner@mail.com', password: 'password' };

describe('AuthService', () => {
  let mockHttp: HttpClient;

  beforeEach(() => {
    mockHttp = { post: null } as HttpClient;

    spyOn(mockHttp, 'post').and.returnValue(Observable.of(mockResponse));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttp
        },
        AuthService
      ]
    });
  });

  it(
    'should be created',
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should post Sign-in',
    fakeAsync(
      inject([AuthService], authService => {
        const expectedUrl = '/api/v1/auth';

        authService.signIn(mockRequest).subscribe(res => {
          expect(mockHttp.post).toHaveBeenCalledWith(expectedUrl, mockRequest);
          expect(res).toEqual({
            id: 1,
            email: 'owner@mail.com',
            first_name: 'Owner',
            last_name: 'Owner',
            position: ['default'],
            roles: ['owner'],
            rate: 0,
            locked: 0,
            created_at: '2017-10-08T16:15:48.000Z',
            updated_at: '2017-10-08T16:15:48.000Z',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
          });
        });
      })
    )
  );
});

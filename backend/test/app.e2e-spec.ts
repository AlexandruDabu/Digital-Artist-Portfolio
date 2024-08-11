import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('API Endpoints (e2e)', () => {
  let app: INestApplication;
  let createdWorkId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // Get all the works
  describe('/works (GET)', () => {
    it('should return an array of works', () => {
      return request(app.getHttpServer())
        .get('/works')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBeTruthy();
        });
    });
  });

  // Create a work that we will make tests on
  describe('/works (POST)', () => {
    it('should create a new work and return it', async () => {
      const newWork = {
        title: 'Test title1',
        description: 'Test description1',
        imageUrl: 'https://images.unsplash.com/photo-1516912911903-8d602e6e9f24',
        clientLink: 'https://portofolio-alexandru.fly.dev/',
        isVisible: true,
      };

      const response = await request(app.getHttpServer())
        .post('/works')
        .send(newWork)
        .expect(201)
        .expect('Content-Type', /json/);

      createdWorkId = response.body.id;
      expect(response.body).toHaveProperty('id');
      expect(response.body).toMatchObject(newWork);
    });
  });

  // Check the work we just created
  describe('/works/:id (GET)', () => {
    it('should return a single work by ID', async () => {
      return request(app.getHttpServer())
        .get(`/works/${createdWorkId}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).toHaveProperty('id', createdWorkId);
        });
    });

    it('should return 404 if the work is not found', () => {
      const notExistentId = -1;
      return request(app.getHttpServer())
        .get(`/works/${notExistentId}`)
        .expect(404);
    });
  });

  // Update the work we created
  describe('/works/:id (PUT)', () => {
    it('should update a work by ID and return the updated work', async () => {
      const updateWork = {
        title: 'Updated Test13',
        description: 'Updated Description13',
        imageUrl: 'https://images.unsplash.com/photo-1516912911903-8d602e6e9f24',
        clientLink: 'https://www.artstation.com/artwork/Galactic-Odyssey',
        isVisible: false,
      };

      const response = await request(app.getHttpServer())
        .put(`/works/${createdWorkId}`)
        .send(updateWork)
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toHaveProperty('id', createdWorkId);
      expect(response.body).toMatchObject(updateWork);
    });

    it('should return 404 if trying to update a non-existent work', () => {
      const nonExistedId = -1;
      const updateWork = {
        title: 'Updated Test13',
        description: 'Updated Description13',
        imageUrl: 'https://images.unsplash.com/photo-1516912911903-8d602e6e9f24',
        clientLink: 'https://www.artstation.com/artwork/Galactic-Odyssey',
        isVisible: false,
      };

      return request(app.getHttpServer())
        .put(`/works/${nonExistedId}`)
        .send(updateWork)
        .expect(404);
    });
  });

  // Deletes the work
  describe('/works/:id (DELETE)', () => {
    it('should delete a work by ID and return 204 status', async () => {
      await request(app.getHttpServer())
        .get(`/works/${createdWorkId}`)
        .expect(200);

      await request(app.getHttpServer())
        .delete(`/works/${createdWorkId}`)
        .expect(204);

      await request(app.getHttpServer())
        .get(`/works/${createdWorkId}`)
        .expect(404);
    });
  });
});

import { http, HttpResponse } from 'msw';
import { mockUsers } from '../mockData/mockUser.mock';
import { User, UserCreate } from 'src/app/_interfaces/user';
export const userHandlers = [
  // GET - Liste des utilisateurs
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers);
  }),

  // GET - Utilisateur par ID
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = mockUsers.find(u => u.id === Number(id));
    
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    
    return HttpResponse.json(user);
  }),

  // POST - Créer un utilisateur
  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json() as UserCreate;
    const user: User = {
      id: mockUsers.length + 1,
      ...newUser,
      createdAt : new Date()
    };
    mockUsers.push(user);
    
    return HttpResponse.json(user, { status: 201 });
  }),

  // PUT - Mettre à jour un utilisateur
  http.put('/api/users/:id', async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json() as Partial<User>;
    const userIndex = mockUsers.findIndex(u => u.id === Number(id));
    
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };
    return HttpResponse.json(mockUsers[userIndex]);
  }),

  // DELETE - Supprimer un utilisateur
  http.delete('/api/users/:id', ({ params }) => {
    const { id } = params;
    const userIndex = mockUsers.findIndex(u => u.id === Number(id));
    
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    
    mockUsers.splice(userIndex, 1);
    return new HttpResponse(null, { status: 204 });
  }),
]

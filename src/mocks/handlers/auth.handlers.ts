import { http, HttpResponse } from "msw";
import { mockUsers } from "../mockData/mockUser.mock";
import { Credentials } from "src/app/shared/services/users/credentials.interface";
import { User } from "src/app/_interfaces/user";

export const authHandlers = [
   // POST - Connection
  http.post('/api/login', async ({ request }) => {
    const userCredentials = await request.json() as Credentials;
    console.log(userCredentials);
    const user = mockUsers.find((val: User) => val.email === userCredentials.email);
    console.log(user);
    if (!user) { return HttpResponse.json(null, { status: 404 }); }
    return HttpResponse.json({ user, token: 'esfgrdhgsthtrfh' }, { status: 201 });
  }),
]

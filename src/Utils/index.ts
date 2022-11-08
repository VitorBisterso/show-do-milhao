import { TOKEN_KEY } from 'Const';

function decodeJwt(token: string) {
   const base64Url = token.split('.')[1];

   if (!base64Url) return null;

   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

   if (!base64) return null;

   const jsonPayload = decodeURIComponent(
      window
         .atob(base64)
         .split('')
         .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
         .join('')
   );

   return JSON.parse(jsonPayload);
}

export function isUserLoggedIn() {
   const token = localStorage.getItem(TOKEN_KEY);

   if (!token) return false;

   const decodedToken = decodeJwt(token);
   const dateNow = new Date();

   if (!decodedToken || decodedToken.exp * 1000 < dateNow.getTime())
      return false;

   return true;
}

export function logout() {
   localStorage.removeItem(TOKEN_KEY);
}

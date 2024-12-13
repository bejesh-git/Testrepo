import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  if (!!sessionStorage.getItem("user")) {
    return true;
  }
  else{
    router.navigate(["/login"]);
    return false;

  }
};

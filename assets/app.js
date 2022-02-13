export class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;

      console.log(email, password);
    }

    signIn() {
        return "Ok";
    }

    signUp(username, name) {
        return(`Ok, ${username}, ${name}`);
    }
}
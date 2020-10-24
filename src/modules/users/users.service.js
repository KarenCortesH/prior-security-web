export class UserService {
    constructor({

        Uid,
        fullName,
        email,
        password,
        contactNumber,
        repeatedPassword,
        resetPasswordCode,
        repeatedEmail,
        currentPassword
    }) {
        this.Uid = Uid;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.repeatedPassword = repeatedPassword;
        this.resetPasswordCode = resetPasswordCode;
        this.repeatedEmail = repeatedEmail;
        this.currentPassword = currentPassword;
    }
}
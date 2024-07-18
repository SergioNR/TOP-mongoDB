export class TestRequest {
    constructor(url, email) {
        this.url = url;
        this.email = email;
        this.paymentStatus = 'pending';
        this.status = 'draft';
        this.participantIds = [1,2];
        this.fullName = {
            firstName: 'jose',
            lastName: 'perez'
        };
        }
    };

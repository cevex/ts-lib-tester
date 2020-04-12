import { LoggerService } from '@tester/lib/logger/logger.service';
import { MathService } from '@tester/lib/math/math.service';
import express, { Express } from 'express';

export class LibTesterServer {

    private logger = new LoggerService();
    private mathService = new MathService();

    // private stringService = new StringService();

    public start() {
        const app = express();
        const port = 3000;

        this.openAPI(app);

        app.listen(port, err => {
            if (err) {
                return this.logger.error(err);
            }
            return this.logger.info(`Server is listening on http://localhost:${port}`);
        });
    }

    private openAPI(app: Express) {
        app.get('/', (req, res) => {
            res.send('Server is running !!');
        });

        app.get('/square/:number', (req, res) => {
            const num = +req.params.number;

            if (isNaN(num)) {   // Validate
                const errorMessage = `"${req.params.number}" is not a number`;
                this.logger.error(errorMessage);
                res.send(errorMessage);
                return;
            }

            res.send(`MATH : ${num} square is equal to ${this.mathService.square(num)}`);
        });

        // app.get('/greet/:name', (req, res) => {
        //     const name = req.params.name;
        //     const isBatman = this.stringService.includesIgnoreAccents(name, 'bruce');
        //     res.send(`Hello ${isBatman ? 'Batman' : name}`);
        // });
    }

}

import express  from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index"
import globalErrorHandler from "./middleware/error.middleware";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

const app = express();

//Middlewares
app.use(cors());
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'10mb'}));
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec)
);
app.use("/api/v1",routes);
app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Logistics Api Running"
    });
})
app.use(globalErrorHandler);

export default app;

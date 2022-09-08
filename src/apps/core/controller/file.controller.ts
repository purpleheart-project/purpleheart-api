import {Body, Controller, Get, Post, UseGuards,Request} from "@nestjs/common";
import {CreateFileService} from "../service/create-file.service";
import {JwtAuthGuard} from "../../auth/guards/jwt-auth.guard";
import {GetCollectionTreeService} from "../service/get-collection-tree.service";
import {RetrieveRequestService} from "../service/retrieve-request.service";
import { UpdateRequestService } from "../service/update-request.service";
// import {RetrieveRequestService} from "../../request/service/retrieve-request.service";

@Controller()
export class FileController {
  constructor(
      private createFileService:CreateFileService,
      private getCollectionTreeService:GetCollectionTreeService,
      private retrieveRequestService:RetrieveRequestService,
      private updateRequestService:UpdateRequestService
  ) {
  }
  @UseGuards(JwtAuthGuard)
  @Post('createfile')
  createFile(@Body() reqBody,@Request() req){
    console.log(req.user)
    return this.createFileService.invoke(req.user.id, reqBody)
  }

  @Post('getcollectiontree')
  getCollectionTree(@Body() reqBody,@Request() req){
    return this.getCollectionTreeService.invoke(reqBody)
  }

  @Post('retrieverequest')
  retrieveRequest(@Body() reqBody,@Request() req){
    return this.retrieveRequestService.invoke(reqBody)
  }

  @Post('updaterequest')
  updateRequest(@Body() reqBody,@Request() req){
    return this.updateRequestService.invoke(reqBody)
  }
}
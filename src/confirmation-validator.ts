import { Validator } from "./validator";

export class ConfirmationValidator extends Validator {
  constructor(url: string, options = {}) {
    super(url, options);
  }

  async getBankConfirmationServices() {
    return await this.getData("/bank_confirmation_services");
  }

  // TODO: POST /confirmation_blocks

  // TODO: POST /connection_requests

  // TODO: POST /primary_validator_updated

  // TODO: POST /upgrade_request
}

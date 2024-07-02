import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { Repository } from 'typeorm';
import { Leads } from './entities/leads.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LeadsService {
  constructor(
    private accountService: AccountsService,
    @InjectRepository(Leads)
    private leadsRepo: Repository<Leads>,
  ) {}

  async savePhoneInfo(body) {
    console.log(body);
    this.leadsRepo.save({
      phone: body.phone,
      createdPhone: body.date,
      mnp: body.mnp,
      agent: body.agent,
      ref: body.ref,
    });
  }
}

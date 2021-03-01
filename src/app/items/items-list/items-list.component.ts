import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mitem } from 'src/app/shared/components/models/mitem.model';
import { MitemService } from 'src/app/shared/services/mitem.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Mitem [];
  searchCat = "";
  searchDir = 'up';
  searchParam = 'price'

  constructor(private mitemService: MitemService, private router: Router) { }


  ngOnInit(): void {
    this.getData();
  }
  
  async getData(){
    
    try{
      let items = this.mitemService.getAll();
      
      this.items = (await items === null || await items === undefined) ? [] : await items;
      
      }catch(err){
        console.error(err);
      }
  }

  
  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'edit', id]);
  }
  
  onAddProfile() {
    this.router.navigate([this.router.url, 'edit']);
  }

  async onDelete(item: { id: number; }) {
    try {
      await this.mitemService.deleteOneById(item.id);
  
    } catch (err) {
      console.error(err);
    } finally {
      
      this.getData();
  
    }
  }

  changeSerchDir(){
    if(this.searchDir == 'up' ){
      this.searchDir = 'down'
    }else{
      this.searchDir = 'up'
    }
  }

}

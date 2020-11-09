import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

   quotes: Quote[] = [
   new Quote(1,'Hardwork','If you cannt do anything today what makes you thing you can do it tommorrow..', 'Repha Ayako', new Date(2020,11,9), 0,0),
   new Quote(2, "Motivational", "Do not judge me by my success but judge me by how many times i rose up when i fall ..", 'Nelson Mandela', new Date(2020,11,9), 0,0),
   new Quote(3,'Positive','What i have or ever hope to be i owe to mother. ...', 'Susan Ogeo', new Date(2020,11,), 0,0)
 ]

   deleteQuote(isComplete, index){
     if(isComplete){
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}..?`)

       if(toDelete){
         this.quotes.splice(index, 1);
       }
     }
   }

  toggleDetails(index){
    this.quotes[index].showDescription =! this.quotes[index].showDescription;
  }

  upvotes:number = 0;
  downvotes: number = 0;

  upvoteButton(i){
    this.quotes[i].upvotes++;
  }
  downvoteButton(i){
    this.quotes[i].downvotes++;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
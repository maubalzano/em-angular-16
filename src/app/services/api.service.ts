import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public pokemons: any[] = [
    {
      name: 'Bulbasaur'
    },
    {
      name: 'Charmander'
    }
  ];
  private http = inject(HttpClient);
  public pokemons$?: Observable<any[]>;
  public pokemonsSubject?: BehaviorSubject<any[]>;

  constructor() {
    this.pokemonsSubject = new BehaviorSubject(this.pokemons);
    console.log('From apiService Constructor')
  }

  public getPokemon(id: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id).pipe(
      tap(res => console.log(res)),
      map((res: any) => res.name)
    )
  }

}

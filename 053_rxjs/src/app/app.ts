import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of, from, interval, merge, concat, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('053_rxjs');

  constructor() {

    // 1. of()
    const source1 = of('a', 'b', 'c');
    source1.subscribe(v => console.log('of:', v));

    // 2. from(Promise)
    const source2 = from(
      new Promise<string>(resolve => {
        setTimeout(() => resolve("Valor resuelto por la Promise."), 2000);
      })
    );
    source2.subscribe(v => console.log('from Promise:', v));

    // 3. from(array)
    const source3 = from([
      { nombre: 'Miguel', edad: 30 },
      { nombre: 'Juan', edad: 35 }
    ]);
    source3.subscribe(v => console.log('from array:', v));

    // 4. interval + map
    const source4 = interval(1000).pipe(
      map(x => 2 * x)
    );
    source4.subscribe(v => console.log('interval map:', v));

    // 5. merge
    const s1 = interval(1000);
    const s2 = interval(1000).pipe(map(x => 10 * x));
    const merged = merge(s1, s2);
    merged.subscribe(v => console.log('merge:', v));

    // 6. concat
    const c1 = of('a', 'b', 'c');
    const c2 = of('d', 'e', 'f');
    const concatenado = concat(c1, c2);
    concatenado.subscribe(v => console.log('concat:', v));

    // 7. tap (antes era .do)
    const source5 = of('a', 'b', 'c').pipe(
      tap(x => console.log('tap:', x))
    );
    source5.subscribe();
  }
}

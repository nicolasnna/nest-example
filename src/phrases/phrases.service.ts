import { Injectable } from '@nestjs/common'

const frasesAleatorias = [
  'El conocimiento es poder.',
  'No cuentes los días, haz que los días cuenten.',
  'La vida es como andar en bicicleta: para mantener el equilibrio, debes seguir adelante.',
  'Hazlo con pasión o no lo hagas.',
  'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
  'Aprende del ayer, vive el hoy, espera el mañana.',
  'La creatividad es inteligencia divirtiéndose.',
  'La práctica hace al maestro.',
  'Todo es difícil antes de ser fácil.',
  'No esperes por oportunidades, créalas.'
]

@Injectable()
export class PhrasesService {
  getPhrase() {
    return frasesAleatorias[Math.floor(Math.random() * frasesAleatorias.length)]
  }
}

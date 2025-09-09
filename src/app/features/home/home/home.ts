import { Component } from '@angular/core';
import { HeroSection } from '../../../shared/components/hero-section/hero-section';
import { BurgerList } from '../burger-list/burger-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSection, BurgerList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

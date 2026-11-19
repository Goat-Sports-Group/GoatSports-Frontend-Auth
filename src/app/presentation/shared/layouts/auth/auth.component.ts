import { Component, ElementRef, OnDestroy, afterNextRender, inject, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from "@environments/environment";
import { GoatMotionService } from '@shared/motion/goat-motion.service';
import { ParticleBackdropComponent } from '@shared/motion/particle-backdrop.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [RouterModule, ParticleBackdropComponent]
})
export class AuthComponent implements OnDestroy {
  private readonly motion = inject(GoatMotionService);
  private readonly shell = viewChild.required<ElementRef<HTMLElement>>('shell');

  constructor() {
    // .auth-shell tự cuộn (h-dvh + overflow-y-auto) nên cuộn mượt gắn vào nó thay vì cửa sổ.
    afterNextRender(() => this.motion.start({ wrapper: this.shell().nativeElement, root: this.shell().nativeElement }));
  }

  ngOnDestroy(): void {
    this.motion.stop();
  }

  navigateToHome() {
    window.location.href = environment.clientApiUrl;
  }
}

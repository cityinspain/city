import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Edit3 } from 'angular-feather/icons';
// TODO: can we specify an icon set programatically?
// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  Edit3,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}

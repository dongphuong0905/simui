import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from '@spartan-ng/ui-alert-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'sim-notification-03',
	standalone: true,
	providers: [provideIcons({ lucideCircleCheck, lucideX })],
	imports: [
		NgIcon,
		HlmIconDirective,
		HlmAlertDirective,
		HlmAlertDescriptionDirective,
		HlmAlertIconDirective,
		HlmButtonDirective,
	],
	template: `
		<div hlmAlert class="bg-background z-50 flex gap-3 py-3 shadow-lg">
			<span class="flex items-center">
				<ng-icon hlm hlmAlertIcon name="lucideCircleCheck" class="text-emerald-500" />
			</span>
			<p hlmAlertDesc class="grow">Completed successfully!</p>
			<button hlmBtn variant="ghost" class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent">
				<ng-icon hlm name="lucideX" size="sm" class="opacity-60 transition-opacity group-hover:opacity-100" />
			</button>
		</div>
	`,
})
export class Notification03Component {}

export const notification03Code = `
import { Component } from '@angular/core';
import { lucideCircleCheck, lucideX } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
} from '@spartan-ng/ui-alert-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'sim-notification-03',
  standalone: true,
  providers: [provideIcons({ lucideCircleCheck, lucideX })],
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmButtonDirective,
  ],
  template: \`
    <div hlmAlert class="bg-background z-50 flex gap-3 py-3 shadow-lg">
      <span class="flex items-center">
        <ng-icon
          hlm
          hlmAlertIcon
          name="lucideCircleCheck"
          class="text-emerald-500"
        />
      </span>
      <p hlmAlertDesc class="grow">Completed successfully!</p>
      <button
        hlmBtn
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
      >
        <ng-icon
          hlm
          name="lucideX"
          size="sm"
          class="opacity-60 transition-opacity group-hover:opacity-100"
        />
      </button>
    </div>
  \`,
})
export class Notification03Component {}
`;

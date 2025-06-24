'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarBase from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof CalendarBase>;

function Calendar({ className, ...props }: CalendarProps) {
  return (
    <div className={cn('p-3', className)}>
      <CalendarBase
        prevLabel={<ChevronLeft className="h-4 w-4" />}
        nextLabel={<ChevronRight className="h-4 w-4" />}
        calendarType="US"
        {...props}
      />
    </div>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

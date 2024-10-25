import React from 'react';

import { _tasks } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsTasks } from '../../overview/analytics-tasks';


// ----------------------------------------------------------------------

export function TaskView() {

  return (
    <DashboardContent>
      <AnalyticsTasks title="Tasks" list={_tasks} />
    </DashboardContent>
  );
}

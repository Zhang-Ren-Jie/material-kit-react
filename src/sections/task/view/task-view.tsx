import React, { useState } from 'react';

import { _tasks } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsTasks } from '../../overview/analytics-tasks';


// ----------------------------------------------------------------------

export function TaskView() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <DashboardContent>


          <AnalyticsTasks title="Tasks" list={_tasks} />

    </DashboardContent>
  );
}

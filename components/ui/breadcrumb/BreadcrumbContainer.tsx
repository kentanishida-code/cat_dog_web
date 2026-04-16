'use client';

import Breadcrumb from './breadcrumb';
import useBreadcrumb from './nav-breadcrumb';

export default function BreadcrumbContainer() {
  const items = useBreadcrumb();

  return <Breadcrumb items={items} />;
}
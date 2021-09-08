
export function compareByEngNameToSmall(a: any, b: any) {
  if (a[1].WordData.eng > b[1].WordData.eng) {
    return -1;
  }
  if (a[1].WordData.eng < b[1].WordData.eng) {
    return 1;
  }
  return 0;
}
export function compareByEngNameToBig(a: any, b: any) {
  if (a[1].WordData.eng < b[1].WordData.eng) {
    return -1;
  }
  if (a[1].WordData.eng > b[1].WordData.eng) {
    return 1;
  }
  return 0;
}

export function compareByRusNameToSmall(a: any, b: any) {
  if (a[1].WordData.rus > b[1].WordData.rus) {
    return -1;
  }
  if (a[1].WordData.rus < b[1].WordData.rus) {
    return 1;
  }
  return 0;
}
export function compareByRusNameToBig(a: any, b: any) {
  if (a[1].WordData.rus < b[1].WordData.rus) {
    return -1;
  }
  if (a[1].WordData.rus > b[1].WordData.rus) {
    return 1;
  }
  return 0;
}

export function compareByClicksToSmall(a: any, b: any) {
  if (a[1].WordData.Statistics.clicks > b[1].WordData.Statistics.clicks) {
    return -1;
  }
  if (a[1].WordData.Statistics.clicks < b[1].WordData.Statistics.clicks) {
    return 1;
  }
  return 0;
}
export function compareByClicksToBig(a: any, b: any) {
  if (a[1].WordData.Statistics.clicks < b[1].WordData.Statistics.clicks) {
    return -1;
  }
  if (a[1].WordData.Statistics.clicks > b[1].WordData.Statistics.clicks) {
    return 1;
  }
  return 0;
}

export function compareByRightToSmall(a: any, b: any) {
  if (a[1].WordData.Statistics.right > b[1].WordData.Statistics.right) {
    return -1;
  }
  if (a[1].WordData.Statistics.right < b[1].WordData.Statistics.right) {
    return 1;
  }
  return 0;
}
export function compareByRightToBig(a: any, b: any) {
  if (a[1].WordData.Statistics.right < b[1].WordData.Statistics.right) {
    return -1;
  }
  if (a[1].WordData.Statistics.right > b[1].WordData.Statistics.right) {
    return 1;
  }
  return 0;
}

export function compareByWrongToSmall(a: any, b: any) {
  if (a[1].WordData.Statistics.wrong > b[1].WordData.Statistics.wrong) {
    return -1;
  }
  if (a[1].WordData.Statistics.wrong < b[1].WordData.Statistics.wrong) {
    return 1;
  }
  return 0;
}
export function compareByWrongToBig(a: any, b: any) {
  if (a[1].WordData.Statistics.wrong < b[1].WordData.Statistics.wrong) {
    return -1;
  }
  if (a[1].WordData.Statistics.wrong > b[1].WordData.Statistics.wrong) {
    return 1;
  }
  return 0;
}

export function compareByPercentToSmall(a: any, b: any) {
  if (a[1].WordData.Statistics.percent > b[1].WordData.Statistics.percent) {
    return -1;
  }
  if (a[1].WordData.Statistics.percent < b[1].WordData.Statistics.percent) {
    return 1;
  }
  return 0;
}
export function compareByPercentToBig(a: any, b: any) {
  if (a[1].WordData.Statistics.percent < b[1].WordData.Statistics.percent) {
    return -1;
  }
  if (a[1].WordData.Statistics.percent > b[1].WordData.Statistics.percent) {
    return 1;
  }
  return 0;
}

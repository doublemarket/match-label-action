function parseAllowed(allowed) {
  return allowed.split(/\r?\n/).reduce(
    (labels, line) =>
      labels
        .concat(line.split(/,\s*/))
        .filter(label => label)
        .map(label => label.trim()),
    []
  )
}

function findMatching(labelNames, allowedLabels, isMultipleAllowed) {
  const allowedLabelsSet = new Set(allowedLabels)
  const matchingLabels = labelNames.filter(labelName =>
    allowedLabelsSet.has(labelName)
  )
  if (
    isMultipleAllowed ? matchingLabels.length < 1 : matchingLabels.length !== 1
  ) {
    const quantifier = isMultipleAllowed ? 'at least' : 'exactly'
    const labels = labelNames.join(',')
    const alaulabels = allowedLabelSet.join(',')
    const mattilabels = matchingLabels.join(',')
    throw new Error(
      `Could not find ${quantifier} one of the appropriate labels on the PR. ${labels} / ${alaulabels} / ${mattilabels}`
    )
  }

  return matchingLabels
}

module.exports = {parseAllowed, findMatching}

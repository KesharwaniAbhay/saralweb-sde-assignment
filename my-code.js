const mergeTimeRanges = (nums, threshold) => {


  if (!Array.isArray(nums)) throw new TypeError("provide me valid array");
  if (nums.length === 0) return [];

  const sorted = [...nums].sort((a, b) => a[0] - b[0]);

  const merged = [];
  let temp = [...sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (start <= temp[1] + threshold) {
      temp[1] = Math.max(temp[1], end);
    } else {
      merged.push(temp);
      temp = [start, end];
    }
  }

  merged.push(temp);
  return merged;
};

module.exports = { mergeTimeRanges };

/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (42.17%)
 * Likes:    5377
 * Dislikes: 191
 * Total Accepted:    710.5K
 * Total Submissions: 1.5M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 *
 * Example 1:
 *
 *
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 *
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 *
 * Output: 3
 *
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "2";
        findIsland(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
var findIsland = function (grid, i, j) {
  if (i + 1 < grid.length) {
    if (grid[i + 1][j] === "1") {
      grid[i + 1][j] = "2";
      findIsland(grid, i + 1, j);
    }
  }
  if (i - 1 >= 0) {
    if (grid[i - 1][j] === "1") {
      grid[i - 1][j] = "2";
      findIsland(grid, i - 1, j);
    }
  }
  if (j + 1 < grid[i].length) {
    if (grid[i][j + 1] === "1") {
      grid[i][j + 1] = "2";
      findIsland(grid, i, j + 1);
    }
  }
  if (j - 1 >= 0) {
    if (grid[i][j - 1] === "1") {
      grid[i][j - 1] = "2";
      findIsland(grid, i, j - 1);
    }
  }
};

// @lc code=end

function findRedundantConnection(edges: number[][]): number[] {
    let n = 0;
    let hasCycle = false;
    const visited: boolean[] = [];
    const edge: number[][] = [];

    // 找最大节点
    for (let e of edges) {
        n = Math.max(n, e[0]);
        n = Math.max(n, e[1]);
    }


    // 出边数组初始化
    for (let i = 0; i <= n; i++) {
        edge[i] = [];
    }

    // 加边
    function addEdge(u, v) {
        edge[u].push(v);
    }

    // DFS无向图找环
    function dfs(x, father) {
        visited[x] = true;
        for (let y of edge[x]) {
            if (y === father) {
                continue;
            }
            if (visited[y]) {
                hasCycle = true;
            } else {
                dfs(y, x);
            }
        }
    }

    for (let oneEdge of edges) {
        const u = oneEdge[0];
        const v = oneEdge[1];
        addEdge(u, v);
        addEdge(v, u);
        for (let i = 0; i <= n; i++) visited[i] = false;
        dfs(u, -1);
        if (hasCycle) {
            return oneEdge;
        }
    }

    return [];
};
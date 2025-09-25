#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int N, M;
    cin >> N >> M;
    vector<vector<int>> matrix(N, vector<int>(M));
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            cin >> matrix[i][j];
        }
    }
    for (int i = 0; i < N; i++) {
        int sum = 0;
        int mx = matrix[i][0];
        int mn = matrix[i][0];
        for (int j = 0; j < M; j++) {
            sum += matrix[i][j];
            mx = max(mx, matrix[i][j]);
            mn = min(mn, matrix[i][j]);
        }
        cout << sum << " " << mx << " " << mn << endl;
    }
    return 0;
}
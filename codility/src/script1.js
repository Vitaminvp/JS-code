       const F = K => {
           // write your code in JavaScript (Node.js 8.9.4)
           if(K == 0) return 0;
           if(K > 0){
               return F(K - 1) + K;
           }
       }
       function sol(N) {
           for(let i = N; i>=0; i--){
               if(F(i) <= N) return i;

           }
       return 0;
       }
       console.log("solution(17)", sol(17));
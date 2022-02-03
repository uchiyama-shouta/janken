# Next.js starter template.

- TypeScript
- Next.js
- ESLint
- Prettier
- Tailwind CSS

## 使い方

### プロジェクトの作成

`Use this templateを押す`

```
git clone repo_url
```

or

```
yarn create next-app test --example https://github.com/uchiyama-shouta/next-template
```

### componentsディレクトリを作成
```
yarn
mkdir src/components
```

### React Query を使う場合

```
yarn add react-query
```

```TSX
// _app.tsx
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
        refetchOnWindowFocus: false,
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
```

# Apollo Client を使う場合

```
yarn add @apollo/client graphql
```

```TSX
// _app.tsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
   uri: process.env.NEXT_PUBLIC_API_URL,
   cache: new InMemoryCache()
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
   );
}
```

# Recoil を使う場合

```
yarn add recoil
```

```TSX
// _app.tsx
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
```

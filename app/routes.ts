import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/list.tsx"), // 기본 주소('/')에서 보여줄 컴포넌트 예시
  route("detail", "routes/detail.tsx"), // 상세 페이지 경로 예시
] satisfies RouteConfig;
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "kebab-case"],
    "scope-enum": [
      2,
      "always",
      [
        "web",
        "server",
        "api",
        "auth",
        "db",
        "env",
        "ui",
        "infra",
        "config",
        "repo",
        "deps",
      ],
    ],
  },
};

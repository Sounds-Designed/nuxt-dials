declare module "#app" {
  interface NuxtApp {
    $knobs: { [key: string]: function };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $knobs: { [key: string]: function };
  }
}

export {};

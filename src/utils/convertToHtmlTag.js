export default function convertToCustomTag(str) {
  // 将 PascalCase 转换为 kebab-case
  let kebabCaseStr = str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  // 返回自定义标签
  return `<${kebabCaseStr}></${kebabCaseStr}>`;
}

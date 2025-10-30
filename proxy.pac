function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.mx") ||
      shExpMatch(host, "*beta.diftech.net") ||
      shExpMatch(host, "*sandbox.platacard.mx") ||
      shExpMatch(host, "*dev.beta.diftech.net") ||
      shExpMatch(host, "*mock-beta.platacard.mx")) {
    return "PROXY 192.168.1.17:9090; DIRECT";
  }
  return "DIRECT";
}
// https://hey-bro.github.io/proxy-config/proxy.pac

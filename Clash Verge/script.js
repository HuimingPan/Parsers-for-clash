// DNS配置
const dnsConfig = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": true,
    "use-system-hosts": false,
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
        // 本地主机/设备
        "+.lan",
        "+.local",
        // Windows网络出现小地球图标
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        // QQ快速登录检测失败
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        // 微信快速登录检测失败
        "localhost.work.weixin.qq.com"
    ],
    "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"]
};
// 规则集通用配置
const ruleProviderCommon = {
    "type": "http",
    "format": "yaml",
    "interval": 86400
};
// 规则集配置
const ruleProviders = {
    "reject": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        "path": "./ruleset/reject.yaml"
    },
    "icloud": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
        "path": "./ruleset/icloud.yaml"
    },
    "apple": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        "path": "./ruleset/apple.yaml"
    },
    "google": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
        "path": "./ruleset/google.yaml"
    },
    "proxy": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        "path": "./ruleset/proxy.yaml"
    },
    "direct": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        "path": "./ruleset/direct.yaml"
    },
    "private": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
        "path": "./ruleset/private.yaml"
    },
    "gfw": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
        "path": "./ruleset/gfw.yaml"
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
        "path": "./ruleset/tld-not-cn.yaml"
    },
    "telegramcidr": {
        ...ruleProviderCommon,
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
        "path": "./ruleset/telegramcidr.yaml"
    },
    "cncidr": {
        ...ruleProviderCommon,
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        "path": "./ruleset/cncidr.yaml"
    },
    "lancidr": {
        ...ruleProviderCommon,
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        "path": "./ruleset/lancidr.yaml"
    },
    "applications": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        "path": "./ruleset/applications.yaml"
    },
    "Bing": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bing/Bing.yaml",
        "path": "./rules/Bing.yaml"
    },
    "OneDrive": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OneDrive/OneDrive.yaml",
        "path": "./rules/OneDrive.yaml"
    },
    "Openai": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
        "path": "./rules/Openai.yaml"
    },
    "Gemini": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml",
        "path": "./rules/Gemini.yaml"
    },
    "Education":{
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/HuimingPan/Parsers-for-clash/refs/heads/main/Clash%20Verge/education.yaml",
        "path": "./rules/Education.yaml"
    }
};

// 规则
const rules = [
    // 自定义规则"RULE-SET,applications,DIRECT",
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "RULE-SET,Education,Education",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,apple,Apple",
    "RULE-SET,google,Google",
    "RULE-SET,Bing,Bing",
    "RULE-SET,OneDrive,OneDrive",
    "RULE-SET,Gemini,AI",
    "RULE-SET,Openai,AI",
    "RULE-SET,proxy,节点选择",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,lancidr,DIRECT,no-resolve",
    "RULE-SET,cncidr,DIRECT,no-resolve",
    "RULE-SET,telegramcidr,节点选择",
    "GEOIP,LAN,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,节点选择",
];
// 代理组通用配置
const groupBaseOption = {
    "interval": 300,
    "timeout": 3000,
    "url": "https://www.google.com/generate_204",
    "lazy": true,
    "max-failed-times": 3,
    "hidden": false
};

// 程序入口
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }

    // 覆盖原配置中DNS配置
    config["dns"] = dnsConfig;

    // 覆盖原配置中的代理组
    config["proxy-groups"] = [
        // ====== 核心策略组 ======
        {
            ...groupBaseOption,
            "name": "节点选择",
            "type": "select",
            "proxies": ["延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
        },
        // ====== 套餐信息组 ======
        {
            ...groupBaseOption,
            "name": "套餐信息",
            "type": "select",
            "include-all": true,
            "filter": "流量|到期|官网",
        },

        // ====== 服务策略组 ======
        {
            ...groupBaseOption,
            "name": "Education",
            "type": "select",
            "proxies": ["DIRECT,no-solve", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://www.seekpng.com/png/full/269-2699239_red-graduation-cap-png-graduation-cap-png-red.png",
        },
        {
            ...groupBaseOption,
            "name": "Bing",
            "type": "select",
            "proxies": ["DIRECT", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg",
        },
        {
            ...groupBaseOption,
            "name": "OneDrive",
            "type": "select",
            "proxies": ["DIRECT", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/onedrive.svg",

        },
        {
            ...groupBaseOption,
            "name": "AI",
            "type": "select",
            "proxies": ["DIRECT", "节点选择", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://www.clashverge.dev/assets/icons/chatgpt.svg",
        },

        {
            ...groupBaseOption,
            "name": "Apple",
            "type": "select",
            "proxies": ["DIRECT", "节点选择", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://www.clashverge.dev/assets/icons/apple.svg",

        },
        {
            ...groupBaseOption,
            "name": "Google",
            "type": "select",
            "proxies": ["节点选择", "香港", "日本", "美国", "新加坡", "其他地区"],
            "include-all": false,
            "icon": "https://www.clashverge.dev/assets/icons/google.svg",
        },

        // ====== 地区节点组 ======
        {
            ...groupBaseOption,
            "name": "香港",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "filter": "HK|Hong|hong|香港|深港|沪港|京港|港",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
        },
        {
            ...groupBaseOption,
            "name": "台湾",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "filter": "TW|Taiwan|taiwan|台湾|台北|台中|新北|彰化",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg"

        },
        {
            ...groupBaseOption,
            "name": "日本",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "filter": "JP|Japan|japan|Tokyo|tokyo|日本|东京|大阪|京日|苏日|沪日|上日|川日|深日|广日",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"

        },
        {
            ...groupBaseOption,
            "name": "美国",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "filter": "US|USA|America|america|United States|美国|凤凰城|洛杉矶|西雅图|芝加哥|纽约|沪美|美",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
        },
        {
            ...groupBaseOption,
            "name": "新加坡",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "filter": "SG|Sing|sing|新加坡|狮城|沪新|京新|深新|杭新|广新",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
        },
        {
            ...groupBaseOption,
            "name": "其他地区",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "exclude-filter": "香港|HK|Hong|🇭🇰|台湾|TW|Taiwan|Wan|🇨🇳|🇹🇼|新加坡|SG|Singapore|狮城|🇸🇬|日本|JP|Japan|🇯🇵|美国|US|States|America|🇺🇸|自动|故障|流量|官网|套餐|机场|订阅|年|月",
            "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/World_Map.png",
        },

        // ====== 功能策略组 ======
        {
            ...groupBaseOption,
            "name": "延迟选优",
            "type": "url-test",
            "tolerance": 100,
            "include-all": true,
            "exclude-filter": "流量|套餐|官网",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
        },
        {
            ...groupBaseOption,
            "name": "故障转移",
            "type": "fallback",
            "include-all": true,
            "exclude-filter": "流量|套餐|官网",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
        },
        {
            ...groupBaseOption,
            "name": "负载均衡(散列)",
            "type": "load-balance",
            "strategy": "consistent-hashing",
            "include-all": true,
            "exclude-filter": "流量|套餐|官网",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
        },
        {
            ...groupBaseOption,
            "name": "负载均衡(轮询)",
            "type": "load-balance",
            "strategy": "round-robin",
            "include-all": true,
            "exclude-filter": "流量|套餐|官网",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
        },
        {
            ...groupBaseOption,
            "name": "广告过滤",
            "type": "select",
            "proxies": ["REJECT", "DIRECT"],
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
        },
        {
            ...groupBaseOption,
            "name": "全局拦截",
            "type": "select",
            "proxies": ["REJECT", "DIRECT"],
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
        },
        {
            ...groupBaseOption,
            "name": "漏网之鱼",
            "type": "select",
            "proxies": ["节点选择", "延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)", "DIRECT"],
            "include-all": true,
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
        },
    ];

    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;

    // 返回修改后的配置
    return config;
}
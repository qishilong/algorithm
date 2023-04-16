/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
// const subdomainVisits = (cpdomains) => cpdomains.map((item) => item.split("."))

var subdomainVisits = function(cpdomains) {
    const ans = [];
    const counts = new Map();
    for (const cpdomain of cpdomains) {
        // console.log(cpdomain)
        const space = cpdomain.indexOf(' ');
        const count = parseInt(cpdomain.slice(0, space));
        const domain = cpdomain.slice(space + 1);
        console.log(space)
        counts.set(domain, (counts.get(domain) || 0) + count);
        for (let i = 0; i < domain.length; i++) {
            if (domain[i] === '.') {
                const subdomain = domain.slice(i + 1);
                counts.set(subdomain, (counts.get(subdomain) || 0) + count);
            }
        }
    }
    for (const [subdomain, count] of counts.entries()) {
        ans.push(count + " " + subdomain);
    }
    console.log(ans)
    return ans;

};
subdomainVisits(cpdomains)

// 输出：["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
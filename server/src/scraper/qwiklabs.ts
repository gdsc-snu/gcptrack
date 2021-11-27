import rp from 'request-promise';
import * as cheerio from 'cheerio';

function extractBadgeDetails(BadgeHTMLElem: cheerio.Element) {
    const BadgeDetail: any = {};
    BadgeHTMLElem.children.forEach( (elem: any) => {
        if(elem.type === 'tag' && elem.name === 'a') {
            BadgeDetail.badgeUrl = elem.children[0].attribs.src;
        } else if (elem.type === 'tag' && elem.name === 'span') {
            if( elem.attribs.class.includes('ql-body-2') ) {
                BadgeDetail.earnedDate = elem.children[0].data.trim('\n');
            } else if (  elem.attribs.class.includes('ql-subhead-1') ){
                BadgeDetail.badgeName = elem.children[0].data.trim('\n');
            }
        }
    })
    return BadgeDetail;
}

export async function getBadgesFromURL(qwiklabURL: string) {
    const html = await rp(qwiklabURL);
    const $ = cheerio.load(html);
    let k: string, v: cheerio.Element;
    const BadgeDetails = [];
    for( [k ,v ] of Object.entries($('.profile-badge')) ){
        if( Number.isInteger(Number(k)) ){
            BadgeDetails.push( extractBadgeDetails(v) );
        }
    }
    return BadgeDetails;
}

// import { getSlugs } from "@/lib/axios";
import Link from "next/link";
import './nav.scss'


const Nav = async () => {

  // const navData = await getSlugs()

  // console.log(navData.items[0].subPages);

  return (
    <nav className="nav">
      {
        // navData.items[0] ?
        //   navData.items.map((site: any, i: number) => {
        //     return (
        //       <div className="nav-level-1" key={i}>
        //         <Link href={site.slug} >{site.name}</Link>
        //         {typeof site.subPages[0] != 'undefined' ? <SubPage site={site} /> : ''}
        //       </div>
        //     )
        //   })
        //   : 'Couldnt find any pages'
      }
    </nav>
  );
};

const SubPage = (prop: { site: any }) => {
  return (
    <div className="nav-level-2" >
      {prop.site.expand.subPages.map((site: any, i: number) => {
        return (
          <>
            <Link href={site.slug} key={i}>{site.name}</Link>
            {typeof site.subPages[0] != 'undefined' ? <SubPage site={site} /> : ''}
          </>
        )
      })}
    </div>
  );
};

export default Nav;

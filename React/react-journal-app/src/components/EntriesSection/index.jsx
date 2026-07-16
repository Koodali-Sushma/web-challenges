import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {/* Map over the entries with both 'entry' and 'index' parameters */}
        {entries.map((entry, index) => {
          const isLastItem = index === entries.length - 1;
          return (
            <Fragment key={entry.id}>
              <Entry
                date={entry.date}
                motto={entry.motto}
                notes={entry.notes}
              />

              {/* Render the divider ONLY if it's NOT the last item */}
              {!isLastItem && <Divider />}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

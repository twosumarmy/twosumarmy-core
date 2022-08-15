import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../constants/navigation";

export interface UserLayoutProps {
  children: React.ReactNode;
  navigations: ReadonlyArray<Navigation>;
  selectedNavigationName?: string;
}

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  navigations,
  selectedNavigationName,
}) => {
  const render = (): React.ReactElement => {
    return (
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=300"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigations.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    className={classNames(
                      item.route === selectedNavigationName
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">{renderMain()}</div>
      </div>
    );
  };

  const renderMain = (): React.ReactElement => {
    return (
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">{children}</div>
          </div>
        </div>
      </main>
    );
  };

  return render();
};

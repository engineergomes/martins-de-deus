import { Fragment, Dispatch, SetStateAction, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface areaModalProps {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	isModalOpen: boolean;
	text: ReactNode;
	title: string;
	panelOpen: boolean;
}

function AreaModal({
	setIsModalOpen,
	isModalOpen,
	title,
	text,
	panelOpen,
}: areaModalProps) {
	return (
		<>
			<Transition appear show={isModalOpen && panelOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => setIsModalOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-[#282828] bg-opacity-70 backdrop-blur-sm" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="flex flex-col gap-6 w-full max-w-4xl transform overflow-hidden bg-[#FDFDFD] px-10 text-left align-middle shadow-xl transition-all z-20 py-16">
									<Dialog.Title
										as="h3"
										className="text-center text-2xl text-[#CFAA7D] font-bold leading-6 fixed"
									>
										{title}
									</Dialog.Title>
									<div className=" text-justify text-lg mt-12">
										{text}
									</div>

									<button
										type="button"
										className="absolute top-3 right-3 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-[#CFAA7D] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										onClick={() => setIsModalOpen(false)}
									>
										<FontAwesomeIcon
											icon={faX}
											className="w-5 h-5"
										/>
									</button>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

export default AreaModal;
